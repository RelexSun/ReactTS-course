export interface Trailer {
  id: number;
  name: string;
  preview: string;

  //TODO: this will be change later cuz we dont know the shape of the data (type).
  data: { 480: string; max: string };
}
