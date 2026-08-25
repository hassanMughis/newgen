import Section from './Section';
import Container from './Container';

export default function ImageGallery() {
  const images = [
    { src: '/gallery1.jpg', alt: 'Gallery image 1' },
    { src: '/gallery2.jpg', alt: 'Gallery image 2' }
  ];

  return (
    <Section className="bg-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-video bg-white/10 rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}