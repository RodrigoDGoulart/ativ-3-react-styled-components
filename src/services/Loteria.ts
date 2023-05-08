import api from './api';
import { LoteriaContextProps } from '../types';

class Loteria {
    async get(): Promise<LoteriaContextProps> {
        const { data } = await api.get(``);
        return data;
    };
}

const loteria = new Loteria();
export default loteria;