import React from "react";
import "../App.css";
import Places from "../components/Places/Places";
import image1 from "../img/powerscourt_estate.jpg";
import image4 from "../img/blarney_castle.jpg";
import image6 from "../img/cliffs_of_moher.jpg";
import image2 from "../img/guinness_storehouse.jpg";
import image3 from "../img/skellig_michael.jpg";
import image5 from "../img/newgrange.jpg";

function Destinations() {
  var destinations = [
    {
      name: "Powerscourt",
      image: image1,
      description:
        "Just 20 km from Dublin is the ineffably grand Powerscourt Estate. Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately home seamlessly into the surrounding landscape. Against the bold backdrop of the Great Sugar Loaf Mountains, the gardens are home to 200 varieties of trees, a rose garden, an Italian garden and a large kitchen garden. There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, Ireland’s highest waterfall at 121 meters.",
    },
    {
      name: "Guinness house",
      image: image2,
      description:
        "Set in the heart of Dublin is the iconic Guinness Storehouse. The brewery has been making Guiness here since 1769 when Arthur Guinness signed a lease for 9,000 years. Nowadays the home of Guinness is a modern visitor attraction, where fans can learn about the process of making the famous black stuff, understand the history behind it and, of course, sample it.",
    },
    {
      name: "Skellig Michael",
      image: image3,
      description:
        "If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off of the Iveragh Peninsula and was frequented by ascetic monks, who chose the towering sea crag as a place to live and worship somewhere between the 6th and 8th centuries.",
    },
    {
      name: "Blarney Castle",
      image: image4,
      description:
        "Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone as millions have done before you. It’s said that people who manage to kiss the mysterious Blarney Stone are endowed with ‘the gift of the gab’. This mystic relic isn’t the only interesting attraction at Blarney Castle – dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, so take a tour and discover the castle’s hidden secrets and expanses of rambling green gardens.",
    },
    {
      name: "Newgrange",
      image: image5,
      description:
        "The unimaginably old stone structure of Newgrange tomb was built in 3200 BC. The domed Megalithic Passage Tomb is estimated to have taken 300 people 20 years to build and covers an area of over one acre, revealing interior stones decorated with the spirals and curves of Neolithic rock art. During the Winter Solstice the passageway, along with the inner chamber, is incredibly illuminated by the sunrise that streams through a roof box at the entrance.",
    },
    {
      name: "Cliffs of Moher",
      image: image6,
      description:
        "Standing at 214 meters over the depths of the Atlantic Ocean, and stretching for an awesome 8 km, are the rugged Cliffs of Moher in County Clare. Visitors are drawn to the cliffs, not just for their sheer impressive size, but also for the views of the breathtaking landscape – on a clear day it is possible to see all 5 of the surrounding counties as well as the Aran Islands.The awe-inspiring cliffs are also home to Ireland’s largest mainland seabird colony, which between April and July includes Puffins!",
    },
  ];

  return (
    <div>
      <Places destinations={destinations} />
    </div>
  );
}

export default Destinations;
