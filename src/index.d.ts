


export interface IPlayerOptions {
  name: String;
}


export interface IPlayer {

  // conatainer of player , 
  conatainer: HTMLDivElement;
  // source url 
  url: string;
  // control bar 
  controller: IControlBar;
  //template
  domTemplate: IDomTemplate;

  play: () => void;

  pause: () => void;

  reload: () => void;

}

export interface IDomTemplate {
  Video: HTMLVideoElement;
}


export interface IControlBar {

}
