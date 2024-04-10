"use client";

export default function Page() {
  return (
    <>
      <p className="text-center text-green-500">Hi Mom!</p>
      <h1 className="bg-blue-500 mt-10 p-5">Finde Kevin G...</h1>
      <button onClick={() => link()} className="bg-blue-500 mt-10 p-5">
        A
      </button>

      <button onClick={() => link2()} className="bg-red-500 mt-10 p-5">
        B
      </button>

      <button onClick={() => link3()} className="bg-green-500 mt-10 p-5">
        C
      </button>
    </>
  );
}

function click() {
  const h1 = document.getElementById("Hallo");
  h1.innerText = "Niemals Gemüse";
  console.log(h1);
}

function link() {
  window.open(
    "https://64.media.tumblr.com/4c98bd5876c29e2c921a1c4b775fccac/6ad220157aceebb7-4b/s1280x1920/92b9e2f566d02d53aab6342c52927a4400e8586d.jpg"
  );
}

function link2() {
  window.open(
    "https://i1.sndcdn.com/artworks-1euZJtyUr7EEXu3b-ft0vgA-t500x500.jpg"
  );
}

function link3() {
  window.open(
    "https://bandofoutsiders.com/wp-content/uploads/2024/01/Kevin-G-Age-1-1-1.jpg"
  );
}
