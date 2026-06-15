export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 bg-black text-white">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">SunnLab</h1>

        <p className="text-xl mb-8">
          SunnLab is an independent developer creating mobile apps and digital experiences.
        </p>

        <div className="space-y-4 text-lg">
          <p><strong>App:</strong> DualFrame</p>
          <p><strong>Category:</strong> Video Recording App</p>
          <p><strong>Description:</strong> DualFrame is a mobile app for recording videos in dual-frame layouts.</p>
          <p><strong>Contact:</strong> dualframe.support@gmail.com </p>
        </div>

        <div className="mt-10">
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </div>
      </section>
    </main>
  );
}
