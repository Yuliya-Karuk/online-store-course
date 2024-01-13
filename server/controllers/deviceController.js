const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let filename = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', filename));
      const device = await Device.create({name, price, brandId, typeId, img: filename});

      if (info) {
        let info1;
        info1 = JSON.parse(info);
        info1.forEach(i =>
          Device.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        );
      }

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, page, limit} = req.query;
    let page1 = page || 1;
    let limit1 = limit || 9;
    let offset = page1 * limit1 - limit1;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({limit: limit1, offset: offset});
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({where: {brandId}, limit: limit1, offset: offset});
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({where: {typeId}, limit: limit1, offset: offset});
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({where: {brandId, typeId}, limit: limit1, offset: offset});
    }
    return res.json(devices);
  }

  async getOne(req, res) {
    const {id} = req.params;
    const device = await Device.findOne(
      {
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}],
      }
    )
    return res.json(device);
  }

}

module.exports = new DeviceController()