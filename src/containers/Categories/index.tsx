import Categories from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/Categories'
import { getCategories } from '../../actions/Categories'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: () => dispatch(getCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
