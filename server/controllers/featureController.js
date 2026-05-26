import Feature from "../models/Feature.js";



// GET FEATURE
export const getFeatureData =
  async (req, res) => {

    try {

      let feature =
        await Feature.findOne();




      // DEFAULT DATA
      if (!feature) {

        feature =
          await Feature.create({

            heading:
              "Helping You Reach What Matters Most",

            description:
              "We aim to help businesses reach their goals.",

            cards: [],

          });

      }




      res.status(200).json(
        feature
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};








// UPDATE FEATURE
export const updateFeatureData =
  async (req, res) => {

    try {

      const {

        heading,
        description,
        cards,

      } = req.body;






      let feature =
        await Feature.findOne();






      // CREATE
      if (!feature) {

        feature =
          new Feature({

            heading,
            description,
            cards,

          });

      }




      // UPDATE
      else {

        feature.heading =
          heading;

        feature.description =
          description;

        feature.cards =
          cards;

      }







      await feature.save();







      res.status(200).json({

        success: true,

        message:
          "Features Updated Successfully",

        feature,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};