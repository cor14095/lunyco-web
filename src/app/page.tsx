export default function Home() {
  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/slacks-bg.jpg')"
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Lunyco Coming Soon...
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 drop-shadow-md">
          Something amazing is on the way
        </p>
      </div>
    </main>
  );
}
