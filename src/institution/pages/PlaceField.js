import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsTypes';
import {Tree} from 'antd';
import axios from 'axios';


const {TreeNode} = Tree;

class PlaceField extends Component {
  state = {
    data: {},
    children: [],
    atualClicked: ''
  };

  componentWillMount() {
    axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/internal/placetree/')
        .then(res => {
          this.setState({data: res.data})
        })
        .catch(error => console.log(error))
  }

  findChildren = (data) => {
    data.forEach((children) => {
      if (children.pk === this.props.atualLocal) {
        Object.assign(children, this.state.children)
      } else {
        if (children.hasOwnProperty('children')) {
          this.findChildren(children.children)
        }
      }
    })

  };

  onSelect = (selectedKeys, e) => {
    this.props.onAtualLocal(e.node.props.eventKey);
    this.addChidren()
  };

  addChidren = () => {
    setTimeout(() => {
      let URL = 'https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/internal/placetree/' + this.props.atualLocal;
      axios.get(URL)
          .then(res => {
            this.setState({children: res.data});
            this.findChildren(this.state.data.children)
          })
          .catch(error => console.log(error))
    }, 500)
  };

  getFieldInfo = () => {
    setTimeout(() => {
      axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/place/' + this.props.atualLocal + '/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token d1c5a0ea6a837ea105a9ca3ce5356dace0d27e18'
        }
      })
          .then(res => this.props.onFieldLoad(res.data))
    }, 500)
  };

  render() {
    return (
        <Tree onSelect={this.onSelect} defaultExpandedKeys={['local']} onClick={this.getFieldInfo} autoExpandParent>
          <TreeNode title="Meus Locais" key="local">
            {
              (this.state.data.hasOwnProperty('children')) ?
                  this.state.data.children.map(polo => {
                    return (
                        <TreeNode title={polo.name} key={polo.pk} onCheck={this.getKey}>
                          {
                            (polo.hasOwnProperty('children')) ?
                                polo.children.map(predio => {
                                  return (
                                      <TreeNode title={predio.name} key={predio.pk}>
                                        {
                                          (predio.hasOwnProperty('children')) ?
                                              predio.children.map(andar => {
                                                return (
                                                    <TreeNode title={andar.name} key={andar.pk}>
                                                      {
                                                        andar.hasOwnProperty('children') ?
                                                            andar.children.map(sala => {
                                                              return (<TreeNode title={sala.name}
                                                                                key={sala.pk}></TreeNode>);
                                                            })
                                                            : console.log('nao tem children ainda')
                                                      }
                                                    </TreeNode>
                                                )
                                              })
                                              : console.log('nao tem children ainda')
                                        }
                                      </TreeNode>
                                  )
                                })
                                : console.log('nao tem children ainda')
                          }
                        </TreeNode>
                    )
                  })
                  : console.log('nao tem children ainda')
            }
          </TreeNode>
        </Tree>
    );
  };
}

const mapStateToProps = state => {
  return {
    atualLocal: state.localReducer.atualLocal,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAtualLocal: (payload) => dispatch({type: actions.ATUAL_LOCAL, payload: payload}),
    onFieldLoad: (payload) => dispatch({type: actions.LOCAL_FIELD_FILL, payload: payload})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceField);