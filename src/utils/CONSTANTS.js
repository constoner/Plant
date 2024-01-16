const scrollProps = {
  debounceDelay: 50,
  scrollPosition: 350,
};

const popupProps = {
  showDelay: 3000,
};

const transitionProps = {
  timingOffset: 50,
  pageTransition: 300,
  linkTransition: 300,
  get scrollTransition() {
    return this.pageTransition + this.timingOffset;
  },
};

const catalogMaxRank = 5;

export { scrollProps, popupProps, transitionProps, catalogMaxRank };
