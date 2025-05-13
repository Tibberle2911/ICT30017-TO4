export const schedule = {
    patient: [
      {
        title: 'Consultation',
        date: '2025-04-07',
        time: '10:00',
        patientId: 'P123',
        appointmentId: 'A123',
        roles: { interpreter: true }
      },
      {
        title: 'Check-up',
        date: '2025-04-07',
        time: '14:00',
        patientId: 'P124',
        appointmentId: 'A124',
        roles: { interpreter: false }
      }
    ],
    staff: [
      {
        date: '2025-04-07',
        time: '10:00',
        patientId: 'P123',
        staffOrInterpreterId: 'Staff - P123',
        status: 'Pending',
        appointmentId: 'A123'
      },
      {
        date: '2025-04-07',
        time: '14:00',
        patientId: 'P124',
        staffOrInterpreterId: 'Staff - P124',
        status: 'Pending',
        appointmentId: 'A124'
      }
    ],
    interpreter: [
      {
        date: '2025-04-07',
        time: '10:00',
        patientId: 'P123',
        staffOrInterpreterId: 'Interpreter - P123',
        status: 'Pending',
        appointmentId: 'A123'
      }
    ]
  };
  