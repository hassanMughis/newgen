'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type LoaderPhase = 'loading' | 'revealing' | 'hidden';

function PortalShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: true,
      powerPreference: 'high-performance',
    });

    if (!gl) return;

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;

      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      float hash(float value) {
        return fract(sin(value * 127.17) * 43758.5453123);
      }

      float hash2(vec2 value) {
        return fract(sin(dot(value, vec2(127.1, 311.7))) * 43758.5453123);
      }

      mat2 rotate2d(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      void main() {
        vec2 p = v_texCoord - 0.5;
        float radius = length(p);
        float time = u_time;

        vec3 electricLime = vec3(0.678, 0.961, 0.192);
        vec3 paleLime = vec3(0.88, 1.0, 0.66);
        vec3 deepGreen = vec3(0.035, 0.24, 0.065);
        vec3 color = vec3(0.0);

        // 0.0s - 0.8s: a single breathing lime-white ignition point.
        float ignition = smoothstep(0.02, 0.65, time);
        float pointPulse = 0.72 + 0.28 * sin(time * 8.0);
        float pointCore = exp(-radius * 95.0) * ignition;
        float pointHalo = exp(-radius * 20.0) * ignition * pointPulse;
        color += paleLime * pointCore * 1.8;
        color += mix(deepGreen, electricLime, 0.58) * pointHalo * 0.75;

        // The outer portal edge is rendered as a perfectly smooth CSS ring.
        // The shader only creates depth and atmosphere inside that boundary.
        float formation = smoothstep(0.38, 1.05, time);
        float ringRadius = 0.455;
        float innerEdgeAura = exp(-abs(radius - 0.405) * 27.0) * formation;
        color += mix(deepGreen, electricLime, 0.68) * innerEdgeAura * 0.2;

        // 1.5s - 2.3s: a rotating galaxy field comes alive inside the portal.
        float particlePhase = smoothstep(0.55, 1.25, time);
        float inside = smoothstep(ringRadius, ringRadius - 0.025, radius) * formation;
        vec2 spun = rotate2d(time * 0.22 + radius * 3.3) * p;
        vec2 gridPosition = (spun / max(ringRadius, 0.04) + 1.0) * 34.0;
        vec2 cell = floor(gridPosition);
        vec2 local = fract(gridPosition) - 0.5;
        float randomStar = hash2(cell);
        float star = smoothstep(0.12, 0.0, length(local)) * step(0.82, randomStar);
        star *= 0.55 + 0.45 * sin(time * (4.0 + randomStar * 5.0) + randomStar * 30.0);

        float movingParticles = 0.0;
        float brightParticles = 0.0;
        for (int i = 0; i < 64; i++) {
          float seed = float(i) + 1.0;
          float travel = fract(time * mix(0.16, 0.38, hash(seed * 2.7)) + hash(seed * 7.1));
          float particleAngle = hash(seed * 4.9) * 6.2831853 + time * mix(-0.7, 0.9, hash(seed * 8.2));
          float particleRadius = mix(0.43, 0.025, travel);
          vec2 position = vec2(cos(particleAngle), sin(particleAngle)) * particleRadius;
          float size = mix(0.0016, 0.0042, hash(seed * 3.3));
          float spark = smoothstep(size, 0.0, distance(p, position));
          float life = smoothstep(0.0, 0.08, travel) * smoothstep(1.0, 0.72, travel);
          movingParticles += spark * life;
          brightParticles += spark * life * step(0.9, hash(seed * 5.5));
        }

        vec3 innerAtmosphere = mix(vec3(0.002, 0.009, 0.003), deepGreen * 0.2, smoothstep(ringRadius, 0.0, radius));
        color += innerAtmosphere * inside * particlePhase;
        color += electricLime * star * inside * particlePhase * 1.25;
        color += paleLime * movingParticles * inside * particlePhase;
        color += vec3(0.96, 1.0, 0.86) * brightParticles * inside * particlePhase;

        color *= smoothstep(0.52, 0.495, radius);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeUniform = gl.getUniformLocation(program, 'u_time');

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(canvas.clientWidth * ratio));
      const height = Math.max(1, Math.round(canvas.clientHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    let frame = 0;
    let startedAt: number | undefined;
    const render = (timestamp: number) => {
      if (startedAt === undefined) startedAt = timestamp;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeUniform, (timestamp - startedAt) * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frame = window.requestAnimationFrame(render);
    };
    frame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="portal-preloader__canvas" />;
}

export default function PortalPreloader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<LoaderPhase>('loading');
  const completedInitialLoad = useRef(false);

  useEffect(() => {
    const isFirstLoad = !completedInitialLoad.current;
    document.documentElement.classList.add('portal-is-loading');
    document.documentElement.classList.remove('portal-has-entered');

    const startFrame = window.requestAnimationFrame(() => {
      setPhase('loading');
    });

    let minimumTimeElapsed = false;
    let pageIsReady = !isFirstLoad || document.readyState === 'complete';
    let hideTimer: number | undefined;
    let heroTimer: number | undefined;

    const beginReveal = () => {
      if (!minimumTimeElapsed || !pageIsReady || hideTimer !== undefined) return;
      setPhase('revealing');
      // Begin the hero behind the circular window so it is fully present when
      // the expanding portal clears the viewport.
      heroTimer = window.setTimeout(() => {
        document.documentElement.classList.add('portal-has-entered');
      }, 1360);
      const revealDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 1250
        : 1850;
      hideTimer = window.setTimeout(() => {
        completedInitialLoad.current = true;
        setPhase('hidden');
        document.documentElement.classList.remove('portal-is-loading');
        document.documentElement.classList.add('portal-has-entered');
      }, revealDuration);
    };

    const handlePageLoad = () => {
      pageIsReady = true;
      beginReveal();
    };

    const minimumTimer = window.setTimeout(() => {
      minimumTimeElapsed = true;
      beginReveal();
    }, 2500);

    if (!pageIsReady) {
      window.addEventListener('load', handlePageLoad, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(startFrame);
      window.clearTimeout(minimumTimer);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
      if (heroTimer !== undefined) window.clearTimeout(heroTimer);
      window.removeEventListener('load', handlePageLoad);
      document.documentElement.classList.remove('portal-is-loading');
    };
  }, [pathname]);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`portal-preloader portal-preloader--${phase}`}
      role="status"
      aria-label="Loading NextGen Digitals"
    >
      <div className="portal-preloader__curtain" />

      <div className="portal-preloader__stage">
        <div className="portal-preloader__energy">
          <PortalShader />
          <div className="portal-preloader__orbit" />
          <div className="portal-preloader__inner-ring" />
          <Image
            src="/ngt-logo-cropped.png"
            alt=""
            width={260}
            height={100}
            priority
            className="portal-preloader__logo"
          />
        </div>

        <div className="portal-preloader__expanding-ring" />
      </div>
    </div>
  );
}
