import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  ForeignKey,
  Model,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";
import { User } from "../Users/Users";

class Task extends Model<
  InferAttributes<Task>,
  InferCreationAttributes<Task>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare situation: boolean;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare user_id: ForeignKey<User['id']>
}

// Task.belongsTo(User)

Task.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      situation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
}, {
    sequelize,
    tableName: "tasks",
    freezeTableName: true,
})

export {Task}