import News from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/News'
import { getNews } from '../../actions/News'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getNews: (page: number) => dispatch(getNews(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
