import CategoryDetail from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/Categories'
import { getCategoryGames } from '../../actions/Categories'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getCategoryGames: (category: number, page: number) => dispatch(getCategoryGames(category, page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail)
