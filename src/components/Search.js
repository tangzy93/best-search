import {Button, TextField} from "@mui/material";
import {Formik, useFormikContext} from 'formik'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
const TextFieldWrapper = styled.div`
  width: 700px;
  margin-right: 10px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchButton = styled(Button)`
  height: 40px;
`
function Search() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  function CustomTextField() {
    const keywords = useSelector(state => state.bestSearch.keywords);
    const { values, handleChange, handleBlur, setFieldValue } = useFormikContext();
    useEffect(() => {
      setFieldValue('keywords', keywords.join(' '))
    }, [keywords])
    return <TextFieldWrapper>
      <TextField
        size={"small"}
        id="fullWidth"
        value={values.keywords}
        fullWidth
        placeholder='Search for new products in 961K stores'
        name={'keywords'}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete={'off'}
      />
    </TextFieldWrapper>
  }
  return (
    <Formik
      initialValues={{
        keywords: ''
      }}
      onSubmit={(values) => {
        const arr = values.keywords.split(' ');
        const query = arr.join('+');
        navigate(`/search/${query}`);
      }}
    >
      {
        ({
           values,
           isSubmitting,
          handleChange,
          handleBlur,
           handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <Flex>
              <CustomTextField/>
              <SearchButton
                disableElevation
                variant={'outlined'}
                color={'cusGray'}
                type={'submit'}
              >
                <SearchIcon/>
              </SearchButton>
            </Flex>
          </form>
        )
      }
    </Formik>
  )
}

export default Search
