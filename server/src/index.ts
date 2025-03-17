import cors from 'cors';
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const getConfig = (path: string) => {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
};

function Bootstrap() {
    const app = express();
    const port = 5000;
    const pathToConfigsDir = path.join(__dirname, 'configs');
    app.use(cors());

    app.get('/cardConfig/:type', async (req: any, res: any) => {
        const params = req.params;
        res.send(getConfig(path.join(pathToConfigsDir, `card.json`)));
    });

    app.get('/reportsConfig', async (req: any, res: any) => {
        res.send(getConfig(path.join(pathToConfigsDir, `reports.json`)));
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

Bootstrap();
