import Progress from "../models/progressModel.js";



// GET
export const getProgress =
  async (req, res) => {

    try {

      let progress =
        await Progress.findOne();




      if (!progress) {

        progress =
          await Progress.create({

            tag:
              "Annual Progression Review",

            heading:
              "Our Startup Journey is Just Getting Started!",

            paragraph:
              "We are in the early stages of building something meaningful.",

            image: "",

            backgroundColor:
              "#708a67",

            headingColor:
              "#ffffff",

            paragraphColor:
              "#ffffff",

            headingFontSize:
              "70px",

            paragraphFontSize:
              "18px",

            headingFontWeight:
              "800",

            paragraphFontWeight:
              "400",

            progressBars: [],

          });

      }




      res.status(200).json(
        progress
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};









// UPDATE
export const updateProgress =
  async (req, res) => {

    try {

      const data =
        req.body;






      let progress =
        await Progress.findOne();






      if (!progress) {

        progress =
          new Progress(data);

      }






      else {

        Object.assign(
          progress,
          data
        );

      }






      await progress.save();






      res.status(200).json({

        success: true,

        message:
          "Progress Updated",

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};