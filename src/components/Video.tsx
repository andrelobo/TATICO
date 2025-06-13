export default function Video() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
           <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/y3MycfDcE-M"
          title="TATICO - Grafite"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
