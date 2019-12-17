const createError = require("http-errors");

const constant    = require("./constant");
const messages    = require("./messages");
const db          = require("./db");

const { INVALID, MOD_FIND_DEFAULT_SKIP, MOD_FIND_DEFAULT_LIMIT } = constant;
const { COMMON_DB_C_ERROR, COMMON_DB_R_ERROR, COMMON_DB_U_ERROR, COMMON_DB_D_ERROR } = messages;

class Model {
  constructor(code, name, scheme) {
    const conn = db.createConnection(code);
    this.m = conn.model(name, scheme);
  }
  async create(obj) {
    try {
      // eslint-disable-next-line new-cap
      return await new this.m(obj).save();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_C_ERROR));
    }
  }
   

  async remove(id, obj = {}) {
    try {
      obj.valid = INVALID;
      return await this.m.findByIdAndUpdate(id, obj).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_D_ERROR));
    }
  }

  async removeByCondition(condition, options, obj = {}) {
    try {
      obj.valid = INVALID;
      return await this.m.update(condition, obj, options).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_D_ERROR));
    }
  }

  async delete(condition) {
    try {
      return await  this.m.remove(condition).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_D_ERROR));
    }
  }

  async update(id, obj) {
    try {
      return await this.m.findByIdAndUpdate(id, obj).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_U_ERROR));
    }
  }

  async updateByCondition(condition, obj, options) {
    try {
      return await this.m.update(condition, obj, options).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_U_ERROR));
    }
  }

  async get(id, projection = "") {
    try {
      return await this.m.findById(id, projection).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }

  async getOne(condition, projection = "") {
    try {
      return await this.m.findOne(condition, projection).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }

  async count(condition) {
    try {
      return await this.m.count(condition).exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }

  async getList(condition, projection,
    skip = MOD_FIND_DEFAULT_SKIP,
    limit = MOD_FIND_DEFAULT_LIMIT,
    sort = "") {
    try {
      return await  this.m.find(condition)
        .select(projection)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec();
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }


  async distinct(field, condition) {
    try {
      return await this.m.distinct(field, condition);
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }

  async aggregate(m, g) {
    try {
      return await this.m.aggregate([{ $match: m }, { $group: g }]);
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }

  async aggregateAnalysis(m, p, g, w, o, skip = MOD_FIND_DEFAULT_SKIP, limit = MOD_FIND_DEFAULT_LIMIT) {
    try {
      return await this.m.aggregate(
        { $match: m },
        { $project: p },
        { $unwind: w },
        { $group: g },
        { $sort: o },
        { $skip: skip },
        { $limit: limit },
      );
    } catch (err) {
      throw new createError.InternalServerError(__(COMMON_DB_R_ERROR));
    }
  }
}

module.exports = Model;
