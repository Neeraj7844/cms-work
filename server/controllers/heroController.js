import Hero from "../models/Hero.js";




// GET HERO DATA
export const getHeroData =
  async (req, res) => {

    try {

      const hero =
        await Hero.findOne();




      res.status(200).json(
        hero
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};






// UPDATE HERO DATA
export const updateHeroData =
  async (req, res) => {

    try {

      const {

        heading,
        paragraph,



        headingSize,
        headingWeight,
        headingColor,



        paragraphSize,
        paragraphWeight,
        paragraphColor,

      } = req.body;





      let hero =
        await Hero.findOne();





      // CREATE NEW
      if (!hero) {

        hero = new Hero({

          heading,
          paragraph,



          headingSize,
          headingWeight,
          headingColor,



          paragraphSize,
          paragraphWeight,
          paragraphColor,

        });

      }



      // UPDATE EXISTING
      else {

        // TEXT
        hero.heading =
          heading;

        hero.paragraph =
          paragraph;





        // HEADING STYLE
        hero.headingSize =
          headingSize;

        hero.headingWeight =
          headingWeight;

        hero.headingColor =
          headingColor;





        // PARAGRAPH STYLE
        hero.paragraphSize =
          paragraphSize;

        hero.paragraphWeight =
          paragraphWeight;

        hero.paragraphColor =
          paragraphColor;

      }






      await hero.save();






      res.status(200).json({

        message:
          "Hero Updated Successfully",

        hero,

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};