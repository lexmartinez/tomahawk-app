import News from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/News'
import { getNews } from '../../actions/News'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getNews: () => dispatch(getNews()),
})

export default connect(mapStateToProps, mapDispatchToProps)(News)
