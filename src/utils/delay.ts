export const fakeDelay = async (delay?: number) => {
  const final_delay = delay !== undefined ? delay : Math.floor(Math.random() * 900) + 100;
  return new Promise((resolve) => setTimeout(resolve, final_delay));
};
