import React from "react";
import Modal from "react-modal";
import { Box } from "../themes/styles";

interface StyledModalProps {
  handleOpenModal: any;
  errorMessage: string;
}
interface StyledModalState {
  showModal: boolean;
  errorMessage: string;
}

class StyledModal extends React.PureComponent<
  StyledModalProps,
  StyledModalState
> {
  state = {
    showModal: false,
    errorMessage: ""
  };

  componentDidUpdate(prevProps: StyledModalProps) {
    if (prevProps.handleOpenModal !== this.props.handleOpenModal) {
      this.setState({
        showModal: this.props.handleOpenModal,
        errorMessage: this.props.errorMessage
      });
    }
  }

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };

    return (
      <Modal isOpen={this.state.showModal} style={customStyles}>
        <Box flexDirection='column' justifyContent='center' alignItems='center'>
          {this.state.errorMessage}
          <button onClick={() => this.setState({ showModal: false })}>
            Close
          </button>
        </Box>
      </Modal>
    );
  }
}

export default StyledModal;
