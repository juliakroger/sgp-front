import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actionsTypes';
import { Tree } from 'antd';
import axios from 'axios';

const { TreeNode } = Tree;

class PlaceField extends Component {
    state = {
        data: {},
        children: [],
        atualClicked: ''
    }

    componentWillMount() {

        axios.get('https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/internal/placetree/')
            .then(res => {
                this.setState({data: res.data})
            })
            .catch(error => console.log(error))
    }

    findChildren = () => {
        console.log(this.props.atualLocal)
        console.log(this.state.children)
        /*data.map((children) => {
            if(children.pk == pk){
                console.log('achei o', children.pk, 'do', children.name)
                Object.assign(children, this.state.children)
            }
            else {
                if(children.hasOwnProperty('children')){
                    this.findChildren(children.children, pk)
                }
                else{
                    console.log('nao achei')
                }
            }
        })
        console.log(this.state.data.children)*/
    }

    onSelect = (selectedKeys) => {
         this.props.onAtualLocal(selectedKeys[0]);
    }

    addChidren = () => {
        setTimeout( () => {
            URL = 'https://sgp-homolog.provafacilnaweb.com.br/demo/api/v1/tm/rest/internal/placetree/' + this.props.atualLocal;
            axios.get(URL)
                .then(res =>{
                    this.setState({children: res.data})
                })
                .catch(error => console.log(error))
                 this.findChildren()
        }, 500 )
    }

    render(){
        return (
          <Tree onSelect={this.onSelect} defaultExpandedKeys={['local']} onClick={this.addChidren} autoExpandParent>
             <TreeNode title="Meus Locais" key="local" >
             {
             (this.state.data.hasOwnProperty('children')) ?
             this.state.data.children.map(polo => {
                 return (
                   <TreeNode title={polo.name} key={polo.pk}>
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
                                      andar.hasOwnProperty('children') ? console.log('tem') : console.log('nao tem children ainda')
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
};

const mapStateToProps = state => {
    return {
        atualLocal: state.localReducer.atualLocal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAtualLocal: (payload) => dispatch({type: actions.ATUAL_LOCAL, payload: payload }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlaceField);