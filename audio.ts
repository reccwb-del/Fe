export const playClickSound = () => {
  // Substitua 'click.mp3' pelo nome exato do seu novo arquivo de som
  const audio = new Audio('/assets/seu-novo-som.mp3'); 
  audio.volume = 0.8;
  audio.play().catch(e => console.log("Erro ao tocar som:", e));
};