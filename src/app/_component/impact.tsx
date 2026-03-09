export default function Impact() {
  return (
    <section id="impact" className=" min-h-screen pt-20">
      <main className=" bg-base-200 flex justify-between rounded-(--radius-box)">
        <div className="p-8">
          <div className=" flex flex-col gap-2">
            <h2 className="h1">Our Impact</h2>
            <p className=" max-w-xl p">
              UMWERO aims to strengthen agriculture in Rwanda and across Africa
              by helping farmers protect their crops, increase productivity, and
              improve food security through accessible technology.
              <br />
              <br />
              By providing farmers with tools to detect plant diseases early and
              understand crop health, UMWERO can help reduce crop losses and
              improve the quality of harvests. This contributes not only to
              better farming outcomes but also to stronger and more sustainable
              food systems.
            </p>
          </div>
        </div>
        <div className="flex relative w-1/3 bg-base-300 h-110 rounded-r-(--radius-box)">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                  linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
                  linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
                `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </main>
    </section>
  );
}
