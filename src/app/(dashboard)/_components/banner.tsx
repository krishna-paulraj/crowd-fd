const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_241,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Help us improve our product -{" "}
          </span>
          <a
            href="https://github.com/krishna-paulraj/crowd-funding"
            className="underline unerline-offset-4"
          >
            Contribute to us!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
