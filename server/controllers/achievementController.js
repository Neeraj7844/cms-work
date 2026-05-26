import Achievement from "../models/Achievement.js";



// GET
export const getAchievement =
  async (req, res) => {

    try {

      let achievement =
        await Achievement.findOne();




      if (!achievement) {

        achievement =
          await Achievement.create({

            heading:
              "We have more than 13+ years of experience",

            paragraph:
              "With over 13 years in the digital space.",

            cards: [],

          });

      }




      res.status(200).json(
        achievement
      );

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};









// UPDATE
export const updateAchievement =
  async (req, res) => {

    try {

      const {

        heading,
        paragraph,
        cards,

      } = req.body;






      let achievement =
        await Achievement.findOne();






      // CREATE
      if (!achievement) {

        achievement =
          new Achievement({

            heading,
            paragraph,
            cards,

          });

      }




      // UPDATE
      else {

        achievement.heading =
          heading;

        achievement.paragraph =
          paragraph;

        achievement.cards =
          cards;

      }







      await achievement.save();







      res.status(200).json({

        success: true,

        message:
          "Achievement Updated Successfully",

        achievement,

      });

    } catch (error) {

      console.log(error);




      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};