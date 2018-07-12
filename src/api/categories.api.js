import { shop } from './shop.api';

const categories = [
  {
    id: 0,
    name: 'Фастфуд',
    svg: '',
  },
  {
    id: 1,
    name: 'Пицца',
    svg: '',
  },
  {
    id: 2,
    name: 'Суши',
    svg: '',
  },
  {
    id: 3,
    name: 'Напитки',
    svg: '',
  },
  {
    id: 4,
    name: 'Наггетсы',
    svg: '',
  },
  {
    id: 5,
    name: 'Сэндвичи',
    svg: '',
  },
];

export default {
  async getCategories() {
    const category = await categories.map((item, index) => {
      shop.categories[index] = item;
    });
    return category;
  },
};
