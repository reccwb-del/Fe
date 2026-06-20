export const playClickSound = () => {
  const audio = new Audio('/assets/click.mp3'); 
  audio.volume = 0.8;
  audio.play().catch(e => console.log("Erro ao tocar som:", e));
};

export const isSoundEnabled = () => true;
export const setSoundEnabled = (enabled: boolean) => {};
