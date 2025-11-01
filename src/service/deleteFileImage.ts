
const fs = require("fs/promises")
const path = require('path')

const removeFile = async (nameFile: string) => {
    const filePath = path.join(process.cwd(),nameFile);
    console.log("file là: ", filePath)
    try {
            await fs.unlink(filePath);
            console.log("Deleted avatar successfully!");
    } catch (error: any) {
            if (error.code === "ENOENT") console.log("File not found");
            else console.error("elete error:", error);
    }
}

module.exports = {removeFile}