import Info from "./info.md";
import Basic from './basic.md'; 
import Card from './card.md'; 
import WithCard from './with-card.md'; 

import CN from "../index.md";
export default {
  render() {
    return (
      <div>
        <Info />
        <Card />
        <Basic />
        <WithCard />
        <CN />
      </div>
    );
  },
}