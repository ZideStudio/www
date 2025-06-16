export const Cryptography = () => {
  return (
    <section className="space-y-10 text-left">
      <p>
        The cryptography tool will be one of the first services available on the site. It allows you to encrypt and decrypt images to secure your content,
        ensuring that it can only be accessed by people you trust!
      </p>

      <div className="space-y-6">
        <p>Here are the steps to encrypt your image:</p>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            Download your key and share it with those you trust
            <img className="h-10" src="https://i.imgur.com/wJQnH2z.png" alt="Encryption Key" />
          </li>
          <li>
            Upload an image you want to secure and associate it with your key. The site will then return a new encrypted image, where the pixels appear
            scrambled and meaningless.
            <img src="https://i.imgur.com/QXllgrW.png" alt="Encryption example" />
          </li>
          <li>
            The recipient of your encrypted image can visit the site, upload the encrypted image along with the associated key, and retrieve the original image
            you had securely hidden. Be careful—if the wrong key is used, the process will not work!
            <img src="https://i.imgur.com/DGU04z9.png" alt="Decryption example" />
          </li>
        </ul>
      </div>

      <p>
        Now you know everything about the first tool from CryptForMe! If you're interested, this service will eventually be paired with a steganography tool,
        which we also recommend checking out.
      </p>

      <p>
        This cryptography tool will be the very first online service from CryptForMe <span className="underline">launching by the end of 2025</span>. Stay tuned
        on our social media channels for updates.
      </p>
    </section>
  );
};
