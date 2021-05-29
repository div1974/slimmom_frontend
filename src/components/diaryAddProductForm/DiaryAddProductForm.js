import React, { useState, useEffect } from 'react';
import { debounce } from 'debounce';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import healthOperations from '../../redux/health/healthOperations';
import modalActions from '../../redux/modal/modalActions';
import healthSelectors from '../../redux/health/healthSelectors';
import '../../styles/components/diaryAddProductForm.scss'

const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, 'Уточните запрос!')
    .max(50, 'Слишком длинный запрос!')
    .required('Заполните название продукта'),
  weight: Yup.string()
    .min(2, 'Слишком малый вес!')
    .max(4, 'Слишком большой вес!')
    .required('Заполните вес'),
});

const DiaryAddProductForm = () => {
  const debounce = require('debounce');
  const size = useWindowSize();
  const date = useSelector(healthSelectors.getDate);
  const products = useSelector(healthSelectors.getProducts);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    productName: '',
    weight: '',
    productId: '',
  });

  const formik = useFormik({
    initialValues: { productName: '', weight: '', productId: '' },
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    },
    validationSchema: SignupSchema,
  });

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []); 

    return windowSize;
  }

  const handleChange = e => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);

    if (name !== 'productName') return;
    if (products.some(product => product.title.ru.includes(value))) {
      formik.setFieldValue(
        'productId',
        products.find(product => {
          return product.title.ru === value;
        })?._id,
      );
    } else {
      debounce(
        dispatch(
          healthOperations.getProductn(formik.values.productName),
        ),
        2000,
      );
    }
  };

  const handleSubmit = ({ productName, ...rest }) => {
    dispatch(healthOperations.postEatenProduct({ ...rest, date }));
    dispatch(modalActions.offModal());
  };

  return (
    <>
      <div className="diaryInptConteiner">
        <form onSubmit={formik.handleSubmit} className="formDairyAddProduct">
          <div className="inputBlockDairyAddProduct">
            <div className="inpt_conteiner"> 
            <input
              type="text"
              list="browsers"
              value={formik.values.productName}
              name="productName"
              id="productName"
              onChange={handleChange}
              placeholder="Введите название продукта"
              className="inpt_nameProd"
            />

            <datalist id="browsers">
              {products.map(product => (
                <option key={product._id} value={product.title.ru}>
                  {product.title.ru}
                </option>
              ))}
            </datalist>
              <input
                type="number"
                min="1"
                name="weight"
                id="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                placeholder="Граммы"
                className="inpt_ccal"
              />
            </div>
            {formik.errors.productName && formik.touched.productName ? (
              <p className="validationError">{formik.errors.productName}</p>
            ) : null}
            {formik.errors.weight && formik.touched.weight ? (
              <p className="validationError weightError">
                {formik.errors.weight}
              </p>
            ) : null}
          </div>
          <button type="submit" className="btnProd">
              <p >{size.width < 768 ? 'Добавить' : '+'}</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default DiaryAddProductForm;
