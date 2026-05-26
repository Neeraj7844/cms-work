import Service from "../models/serviceModel.js";



// GET
export const getService =
  async (req, res) => {

    try {

      let service =
        await Service.findOne();




      if (!service) {

        service =
          await Service.create({

            tag: "What We Do",

            heading:
              "Bringing Ideas to Life Through Design, Code & Strategy",

            paragraph:
              "We help brands turn vision into impact.",

            cards: [],

          });

      }




      res.status(200).json(
        service
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};









// UPDATE
export const updateService =
  async (req, res) => {

    try {

      const {

        tag,
        heading,
        paragraph,
        cards,

      } = req.body;






      let service =
        await Service.findOne();






      if (!service) {

        service =
          new Service({

            tag,
            heading,
            paragraph,
            cards,

          });

      }






      else {

        service.tag =
          tag;

        service.heading =
          heading;

        service.paragraph =
          paragraph;

        service.cards =
          cards;

      }






      await service.save();






      res.status(200).json({

        success: true,

        message:
          "Service Updated",

      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message,

      });

    }

};