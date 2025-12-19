export interface ComponentsProps {
    children : React.ReactNode
}

export interface ButtonProps{
    title: string;
    action?:() => void
}

export interface MovieProps {
  title: string;
  posterImage: string ;
  releaseYear: string ;
}

export interface MoviesProps {
  titleText: {
    text: string;
  };
  primaryImage?: {
    url: string;
  };
  releaseYear: {
    year: string;
  };
}
