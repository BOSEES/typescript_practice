import { connect } from "../mongodb/connect"

const connectTest = async () => {
  let connection;
  try {
    connection = await connect();
    console.log("connection OK",connection);
  } catch(error) {
    console.log(error);
  } finally {
    connection.close();
  }
}

connectTest();