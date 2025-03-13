import cors from 'cors';
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

function Bootstrap() {
    const app = express();
    const port = 5000;
    app.use(cors());
    app.get('/cardConfig/:type', async (req: any, res: any) => {
        const queries = req.query;
        const pathToConfigsDir = path.join(__dirname, 'files', 'cardConfigs');
        const pathToConfig = path.join(pathToConfigsDir, 'cardConfig_v1.0.1.json');
        const data = fs.readFileSync(pathToConfig, 'utf-8');
        res.json(data);
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

Bootstrap();
