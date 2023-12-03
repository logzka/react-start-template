import React, { ReactNode, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';
import { withTranslation } from 'react-i18next';

/** Api */
import { cakes as cakesData } from '../api/cakes';

/** Components */
// import Button from "./button/Button";
import Card from './card/Card';
import ModalWrapperTranslated from './modal-wrapper/ModalWrapper';
import FormEditTranslated from './form/form-edit/FormEdit';

const List = ({ t }: { t: (v: string) => ReactNode | string }) => {
  console.log('List render');

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    trackVisibility: true,
    delay: 700,
  });

  const [cakes, setCakes] = useState(cakesData);

  const setCakesHandle = () => {
    setCakes((prevCakes) => [
      ...prevCakes,
      {
        ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
        id: uuidv4(),
      },
      {
        ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
        id: uuidv4(),
      },
      {
        ...prevCakes[Math.floor(Math.random() * prevCakes.length)],
        id: uuidv4(),
      },
    ]);
  };

  useEffect(() => {
    if (inView) setCakesHandle();
  }, [inView]);

  return (
    <div className="list">
      <ModalWrapperTranslated buttonText={t('add-cake-modal')} isEdit={false}>
        <FormEditTranslated />
      </ModalWrapperTranslated>
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

      <span ref={ref} className="list--load-more__spin">
        &#8635;
      </span>
      {/* <Button className='list--load-more' onClick={setCakesHandle}>Загрузить еще</Button> */}
    </div>
  );
};

const ListTranslated = withTranslation('common')(List);
export default ListTranslated;
