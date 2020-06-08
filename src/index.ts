


interface IPlayerOptions {
  name: String;
}


interface IPlayer {

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

interface IDomTemplate {
  Video: HTMLVideoElement;
}


interface IControlBar {

}


function test(props: IPlayerOptions) {
  console.log(props.name)
}


export default test;