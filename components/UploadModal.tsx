import useUploadModal from '@/hooks/useUploadModal';
import Modal from './Modal';

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      onClose();
    }
  };

  return (
    <Modal
      title="Upload modal title"
      description="Upload Modal description"
      isOpen={isOpen}
      onChange={onChange}
    >
      UploadModal
    </Modal>
  );
};

export default UploadModal;
