import React, { useEffect, useState, useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';

/** Api */
import { cakes as cakesData } from '../api/cakes';

import Button from 'src/components/button/Button';

import Modal from 'src/components/modal/Modal';
import FormEditTranslated from './form/form-edit/FormEdit';

/** Components */
// import Button from "./button/Button";
import Card from './card/Card';
import { IFormValues } from './form/form-edit/types';

const List = ({ t }: { t: (v: string) => React.ReactNode | string }) => {
  console.log('List render');

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    trackVisibility: true,
    delay: 700,
  });

  interface ICakes {
    categoryName?: string;
    name?: string;
    price?: number;
    priceOld?: number;
    description?: string;
    imageUrl?: string;
    id?: string;
  }

  const [cakes, setCakes] = useState<ICakes[]>(cakesData);

  // const setCakesHandle = () => {
  //   setCakes((prevCakes) => [
  //     ...prevCakes,
  //     {
  //       ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
  //       id: uuidv4(),
  //     },
  //     {
  //       ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
  //       id: uuidv4(),
  //     },
  //     {
  //       ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
  //       id: uuidv4(),
  //     },
  //   ]);
  // };

  // useEffect(() => {
  //   if (inView) setCakesHandle();
  // }, [inView]);

  interface INewCake {
    categoryName?: 'Торты' | 'Пироги' | 'Десерты';
    name?: string;
    price?: number;
    priceOld?: number;
    description?: string;
    imageUrl?: string;
    id?: string;
  }

  const [showModal, setShowModal] = useState(false);
  // const [textModal, setTextModal] = useState('');
  const [newCake, setNewCake] = useState<INewCake>({});

  const showModalHandler = (): void => setShowModal(true);
  const hideModalHandler = (): void => setShowModal(false);

  const setCakesHandle = () => {
    setCakes([...cakes, newCake]);
    console.log(newCake);
    console.log(cakes);
  };

  const addNewCakeFunc = (newCake: IFormValues) => {
    setNewCake(newCake);
    setShowModal(false);
    setCakesHandle();
    console.log(cakes);
    console.log(newCake);
  };

  useEffect(() => {
    console.log(cakes);
  }, [newCake]);

  return (
    <div className="list">
      <Button onClick={showModalHandler}>{t('open-modal')}</Button>
      <Modal visible={showModal} hide={hideModalHandler}>
        {<FormEditTranslated addNewCakeFunc={addNewCakeFunc} />}
      </Modal>
      <div className="list--wrapper">
        {cakes.map(({ categoryName, name, price, priceOld, description, imageUrl, id }) => (
          <Card
            key={id}
            type="default"
            categoryName={categoryName}
            name={name}
            price={price}
            priceOld={priceOld}
            description={description}
            imageUrl={imageUrl}
          />
        ))}
      </div>

      {/* <span ref={ref} className="list--load-more__spin">
        &#8635;
      </span> */}
      {/* <Button className='list--load-more' onClick={setCakesHandle}>Загрузить еще</Button> */}
    </div>
  );
};

const ListTranslated = withTranslation('common')(List);
export default ListTranslated;
