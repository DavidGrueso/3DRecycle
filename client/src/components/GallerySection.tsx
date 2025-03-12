export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "3D printed object",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1578327257813-835cdb05bddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "3D printed object",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "3D printed object",
      className: "col-span-1"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "3D printed objects",
      className: "col-span-2"
    },
    {
      src: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "3D printed object",
      className: "col-span-1"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold">Beautiful results.</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            From waste plastic to stunning creations. See what's possible with EcoFilament.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-2xl shadow-lg ${image.className}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-72 object-cover transition duration-500 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
