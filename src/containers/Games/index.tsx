import Games from './View'
import { connect } from 'react-redux'
import { selector } from '../../reducers/Games'
import { getGames } from '../../actions/Games'

const mapStateToProps = (state: any) => selector(state)

const mapDispatchToProps = (dispatch: any) => ({
  getGames: (page: number, query: string) => dispatch(getGames(query, page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Games)
