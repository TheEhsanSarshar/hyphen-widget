// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useEffect, useRef, useState } from "react";
import useModal from "./useModal";

export default function useErrorModal(error: any) {
  const {
    isVisible: isErrorModalVisible,
    hideModal: hideErrorModal,
    showModal: showErrorModal,
  } = useModal()!;

  const previousError = useRef<any>(null);

  useEffect(() => {
    if (error && error !== previousError.current) {
      showErrorModal();
      previousError.current = error;
    }
  }, [error, showErrorModal]);

  return { isErrorModalVisible, showErrorModal, hideErrorModal };
}
