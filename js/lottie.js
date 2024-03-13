(function (a) {
  "use strict";

  a(function () {
    // Load Lottie animation
    var animationContainerId = "lottie-container";
    var animationDataUrl = "../images/developer.json";
    loadLottieAnimation(animationContainerId, animationDataUrl)
      .then((animation) => {
        console.log("Lottie animation loaded:", animation);
      })
      .catch((error) =>
        console.error("Failed to load Lottie animation:", error)
      );
  });

  // Lottie animation loader function
  async function loadLottieAnimation(containerId, animationDataUrl) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with id ${containerId} not found`);
    }

    const response = await fetch(animationDataUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch animation data: ${response.status} ${response.statusText}`
      );
    }

    const animationData = await response.json();
    if (!animationData) {
      throw new Error(`Failed to parse animation data`);
    }

    const animation = lottie.loadAnimation({
      container: container,
      renderer: "canvas",
      loop: true,
      autoplay: true, // Change to true if you want to autoplay
      animationData: animationData,
    });

    return animation;
  }
})(jQuery);
