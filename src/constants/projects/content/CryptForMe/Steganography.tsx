export const Steganography = () => {
  return (
    <section className="space-y-10 text-left">
      <p>
        The steganography tool is an ambitious project, but our prototype has already proven its effectiveness! It will allow you to hide any textual content
        within an image.
      </p>

      <p>Did a friend send you an image without any context? Perhaps they’ve hidden something inside it?</p>

      <p>
        Quickly upload the image to CryptForMe’s steganography tool, pairing it with your CPK key or a password, and finally uncover if there’s something
        concealed within.
      </p>

      <p>This tool will reveal the hidden content intended for you!</p>

      <img className="w-full md:w-1/2 mx-auto" src="https://i.imgur.com/WJuTC10.png" alt="Steganography Example" />

      <p>This more ambitious tool is set to launch in 2026, so stay tuned to our social media channels!</p>
    </section>
  );
};
