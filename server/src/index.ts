import cors from 'cors';
import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

function Bootstrap() {
    const app = express();
    const port = 5000;
    const pathToConfigsDir = path.join(__dirname, 'configs');
    app.use(cors());
    app.get('/cardConfig/:type', async (req: any, res: any) => {
        const params = req.params;
        const pathToConfig = path.join(pathToConfigsDir, `card_${params.type}.json`);
        res.send(JSON.parse(fs.readFileSync(pathToConfig, 'utf-8')));
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

Bootstrap();
