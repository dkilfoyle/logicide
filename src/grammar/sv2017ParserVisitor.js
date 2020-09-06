// Generated from c:\code\JS\logicide\src\grammar\sv2017Parser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by sv2017Parser.

function sv2017ParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

sv2017ParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
sv2017ParserVisitor.prototype.constructor = sv2017ParserVisitor;

// Visit a parse tree produced by sv2017Parser#source_text.
sv2017ParserVisitor.prototype.visitSource_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#description.
sv2017ParserVisitor.prototype.visitDescription = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_operator.
sv2017ParserVisitor.prototype.visitAssignment_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#edge_identifier.
sv2017ParserVisitor.prototype.visitEdge_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#identifier.
sv2017ParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#integer_type.
sv2017ParserVisitor.prototype.visitInteger_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#integer_atom_type.
sv2017ParserVisitor.prototype.visitInteger_atom_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#integer_vector_type.
sv2017ParserVisitor.prototype.visitInteger_vector_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#non_integer_type.
sv2017ParserVisitor.prototype.visitNon_integer_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_type.
sv2017ParserVisitor.prototype.visitNet_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#unary_module_path_operator.
sv2017ParserVisitor.prototype.visitUnary_module_path_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#unary_operator.
sv2017ParserVisitor.prototype.visitUnary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#inc_or_dec_operator.
sv2017ParserVisitor.prototype.visitInc_or_dec_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#implicit_class_handle.
sv2017ParserVisitor.prototype.visitImplicit_class_handle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#integral_number.
sv2017ParserVisitor.prototype.visitIntegral_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#real_number.
sv2017ParserVisitor.prototype.visitReal_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#any_system_tf_identifier.
sv2017ParserVisitor.prototype.visitAny_system_tf_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#signing.
sv2017ParserVisitor.prototype.visitSigning = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#number.
sv2017ParserVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timeunits_declaration.
sv2017ParserVisitor.prototype.visitTimeunits_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#lifetime.
sv2017ParserVisitor.prototype.visitLifetime = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#port_direction.
sv2017ParserVisitor.prototype.visitPort_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#always_keyword.
sv2017ParserVisitor.prototype.visitAlways_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#join_keyword.
sv2017ParserVisitor.prototype.visitJoin_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#unique_priority.
sv2017ParserVisitor.prototype.visitUnique_priority = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#drive_strength.
sv2017ParserVisitor.prototype.visitDrive_strength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#strength0.
sv2017ParserVisitor.prototype.visitStrength0 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#strength1.
sv2017ParserVisitor.prototype.visitStrength1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#charge_strength.
sv2017ParserVisitor.prototype.visitCharge_strength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_lvar_port_direction.
sv2017ParserVisitor.prototype.visitSequence_lvar_port_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_keyword.
sv2017ParserVisitor.prototype.visitBins_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_item_qualifier.
sv2017ParserVisitor.prototype.visitClass_item_qualifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#random_qualifier.
sv2017ParserVisitor.prototype.visitRandom_qualifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_qualifier.
sv2017ParserVisitor.prototype.visitProperty_qualifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#method_qualifier.
sv2017ParserVisitor.prototype.visitMethod_qualifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_prototype_qualifier.
sv2017ParserVisitor.prototype.visitConstraint_prototype_qualifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cmos_switchtype.
sv2017ParserVisitor.prototype.visitCmos_switchtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#enable_gatetype.
sv2017ParserVisitor.prototype.visitEnable_gatetype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#mos_switchtype.
sv2017ParserVisitor.prototype.visitMos_switchtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#n_input_gatetype.
sv2017ParserVisitor.prototype.visitN_input_gatetype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#n_output_gatetype.
sv2017ParserVisitor.prototype.visitN_output_gatetype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pass_en_switchtype.
sv2017ParserVisitor.prototype.visitPass_en_switchtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pass_switchtype.
sv2017ParserVisitor.prototype.visitPass_switchtype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#any_implication.
sv2017ParserVisitor.prototype.visitAny_implication = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timing_check_event_control.
sv2017ParserVisitor.prototype.visitTiming_check_event_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#import_export.
sv2017ParserVisitor.prototype.visitImport_export = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#array_method_name.
sv2017ParserVisitor.prototype.visitArray_method_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_mul_div_mod.
sv2017ParserVisitor.prototype.visitOperator_mul_div_mod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_plus_minus.
sv2017ParserVisitor.prototype.visitOperator_plus_minus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_shift.
sv2017ParserVisitor.prototype.visitOperator_shift = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_cmp.
sv2017ParserVisitor.prototype.visitOperator_cmp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_eq_neq.
sv2017ParserVisitor.prototype.visitOperator_eq_neq = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_xor.
sv2017ParserVisitor.prototype.visitOperator_xor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_impl.
sv2017ParserVisitor.prototype.visitOperator_impl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_nonansi_declaration.
sv2017ParserVisitor.prototype.visitUdp_nonansi_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_ansi_declaration.
sv2017ParserVisitor.prototype.visitUdp_ansi_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_declaration.
sv2017ParserVisitor.prototype.visitUdp_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_declaration_port_list.
sv2017ParserVisitor.prototype.visitUdp_declaration_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_port_declaration.
sv2017ParserVisitor.prototype.visitUdp_port_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_output_declaration.
sv2017ParserVisitor.prototype.visitUdp_output_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_input_declaration.
sv2017ParserVisitor.prototype.visitUdp_input_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_reg_declaration.
sv2017ParserVisitor.prototype.visitUdp_reg_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_body.
sv2017ParserVisitor.prototype.visitUdp_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#combinational_body.
sv2017ParserVisitor.prototype.visitCombinational_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#combinational_entry.
sv2017ParserVisitor.prototype.visitCombinational_entry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequential_body.
sv2017ParserVisitor.prototype.visitSequential_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_initial_statement.
sv2017ParserVisitor.prototype.visitUdp_initial_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequential_entry.
sv2017ParserVisitor.prototype.visitSequential_entry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#seq_input_list.
sv2017ParserVisitor.prototype.visitSeq_input_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#level_input_list.
sv2017ParserVisitor.prototype.visitLevel_input_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#edge_input_list.
sv2017ParserVisitor.prototype.visitEdge_input_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#edge_indicator.
sv2017ParserVisitor.prototype.visitEdge_indicator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#current_state.
sv2017ParserVisitor.prototype.visitCurrent_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#next_state.
sv2017ParserVisitor.prototype.visitNext_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_declaration.
sv2017ParserVisitor.prototype.visitInterface_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_header.
sv2017ParserVisitor.prototype.visitInterface_header = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_item.
sv2017ParserVisitor.prototype.visitInterface_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_declaration.
sv2017ParserVisitor.prototype.visitModport_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_item.
sv2017ParserVisitor.prototype.visitModport_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_ports_declaration.
sv2017ParserVisitor.prototype.visitModport_ports_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_clocking_declaration.
sv2017ParserVisitor.prototype.visitModport_clocking_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_simple_ports_declaration.
sv2017ParserVisitor.prototype.visitModport_simple_ports_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_simple_port.
sv2017ParserVisitor.prototype.visitModport_simple_port = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_tf_ports_declaration.
sv2017ParserVisitor.prototype.visitModport_tf_ports_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#modport_tf_port.
sv2017ParserVisitor.prototype.visitModport_tf_port = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#statement_or_null.
sv2017ParserVisitor.prototype.visitStatement_or_null = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#initial_construct.
sv2017ParserVisitor.prototype.visitInitial_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#default_clocking_or_dissable_construct.
sv2017ParserVisitor.prototype.visitDefault_clocking_or_dissable_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#statement.
sv2017ParserVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#statement_item.
sv2017ParserVisitor.prototype.visitStatement_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cycle_delay.
sv2017ParserVisitor.prototype.visitCycle_delay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_drive.
sv2017ParserVisitor.prototype.visitClocking_drive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clockvar_expression.
sv2017ParserVisitor.prototype.visitClockvar_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#final_construct.
sv2017ParserVisitor.prototype.visitFinal_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#blocking_assignment.
sv2017ParserVisitor.prototype.visitBlocking_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#procedural_timing_control_statement.
sv2017ParserVisitor.prototype.visitProcedural_timing_control_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#procedural_timing_control.
sv2017ParserVisitor.prototype.visitProcedural_timing_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#event_control.
sv2017ParserVisitor.prototype.visitEvent_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delay_or_event_control.
sv2017ParserVisitor.prototype.visitDelay_or_event_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delay3.
sv2017ParserVisitor.prototype.visitDelay3 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delay2.
sv2017ParserVisitor.prototype.visitDelay2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delay_value.
sv2017ParserVisitor.prototype.visitDelay_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delay_control.
sv2017ParserVisitor.prototype.visitDelay_control = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#nonblocking_assignment.
sv2017ParserVisitor.prototype.visitNonblocking_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#procedural_continuous_assignment.
sv2017ParserVisitor.prototype.visitProcedural_continuous_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#variable_assignment.
sv2017ParserVisitor.prototype.visitVariable_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#action_block.
sv2017ParserVisitor.prototype.visitAction_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#seq_block.
sv2017ParserVisitor.prototype.visitSeq_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#par_block.
sv2017ParserVisitor.prototype.visitPar_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_statement.
sv2017ParserVisitor.prototype.visitCase_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_keyword.
sv2017ParserVisitor.prototype.visitCase_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_item.
sv2017ParserVisitor.prototype.visitCase_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_pattern_item.
sv2017ParserVisitor.prototype.visitCase_pattern_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_inside_item.
sv2017ParserVisitor.prototype.visitCase_inside_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#randcase_statement.
sv2017ParserVisitor.prototype.visitRandcase_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#randcase_item.
sv2017ParserVisitor.prototype.visitRandcase_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cond_predicate.
sv2017ParserVisitor.prototype.visitCond_predicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#conditional_statement.
sv2017ParserVisitor.prototype.visitConditional_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#subroutine_call_statement.
sv2017ParserVisitor.prototype.visitSubroutine_call_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#disable_statement.
sv2017ParserVisitor.prototype.visitDisable_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#event_trigger.
sv2017ParserVisitor.prototype.visitEvent_trigger = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#loop_statement.
sv2017ParserVisitor.prototype.visitLoop_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_variable_assignments.
sv2017ParserVisitor.prototype.visitList_of_variable_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#for_initialization.
sv2017ParserVisitor.prototype.visitFor_initialization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#for_variable_declaration_var_assign.
sv2017ParserVisitor.prototype.visitFor_variable_declaration_var_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#for_variable_declaration.
sv2017ParserVisitor.prototype.visitFor_variable_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#for_step.
sv2017ParserVisitor.prototype.visitFor_step = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#loop_variables.
sv2017ParserVisitor.prototype.visitLoop_variables = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#jump_statement.
sv2017ParserVisitor.prototype.visitJump_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#wait_statement.
sv2017ParserVisitor.prototype.visitWait_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#name_of_instance.
sv2017ParserVisitor.prototype.visitName_of_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_instantiation.
sv2017ParserVisitor.prototype.visitChecker_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_checker_port_connections.
sv2017ParserVisitor.prototype.visitList_of_checker_port_connections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#ordered_checker_port_connection.
sv2017ParserVisitor.prototype.visitOrdered_checker_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#named_checker_port_connection.
sv2017ParserVisitor.prototype.visitNamed_checker_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#procedural_assertion_statement.
sv2017ParserVisitor.prototype.visitProcedural_assertion_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#concurrent_assertion_statement.
sv2017ParserVisitor.prototype.visitConcurrent_assertion_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assertion_item.
sv2017ParserVisitor.prototype.visitAssertion_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#concurrent_assertion_item.
sv2017ParserVisitor.prototype.visitConcurrent_assertion_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#immediate_assertion_statement.
sv2017ParserVisitor.prototype.visitImmediate_assertion_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#simple_immediate_assertion_statement.
sv2017ParserVisitor.prototype.visitSimple_immediate_assertion_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#simple_immediate_assert_statement.
sv2017ParserVisitor.prototype.visitSimple_immediate_assert_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#simple_immediate_assume_statement.
sv2017ParserVisitor.prototype.visitSimple_immediate_assume_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#simple_immediate_cover_statement.
sv2017ParserVisitor.prototype.visitSimple_immediate_cover_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#deferred_immediate_assertion_statement.
sv2017ParserVisitor.prototype.visitDeferred_immediate_assertion_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#primitive_delay.
sv2017ParserVisitor.prototype.visitPrimitive_delay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#deferred_immediate_assert_statement.
sv2017ParserVisitor.prototype.visitDeferred_immediate_assert_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#deferred_immediate_assume_statement.
sv2017ParserVisitor.prototype.visitDeferred_immediate_assume_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#deferred_immediate_cover_statement.
sv2017ParserVisitor.prototype.visitDeferred_immediate_cover_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#weight_specification.
sv2017ParserVisitor.prototype.visitWeight_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#production_item.
sv2017ParserVisitor.prototype.visitProduction_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_code_block.
sv2017ParserVisitor.prototype.visitRs_code_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#randsequence_statement.
sv2017ParserVisitor.prototype.visitRandsequence_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_prod.
sv2017ParserVisitor.prototype.visitRs_prod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_if_else.
sv2017ParserVisitor.prototype.visitRs_if_else = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_repeat.
sv2017ParserVisitor.prototype.visitRs_repeat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_case.
sv2017ParserVisitor.prototype.visitRs_case = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_case_item.
sv2017ParserVisitor.prototype.visitRs_case_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_rule.
sv2017ParserVisitor.prototype.visitRs_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#rs_production_list.
sv2017ParserVisitor.prototype.visitRs_production_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#production.
sv2017ParserVisitor.prototype.visitProduction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tf_item_declaration.
sv2017ParserVisitor.prototype.visitTf_item_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tf_port_list.
sv2017ParserVisitor.prototype.visitTf_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tf_port_item.
sv2017ParserVisitor.prototype.visitTf_port_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tf_port_direction.
sv2017ParserVisitor.prototype.visitTf_port_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tf_port_declaration.
sv2017ParserVisitor.prototype.visitTf_port_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_tf_variable_identifiers_item.
sv2017ParserVisitor.prototype.visitList_of_tf_variable_identifiers_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_tf_variable_identifiers.
sv2017ParserVisitor.prototype.visitList_of_tf_variable_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#expect_property_statement.
sv2017ParserVisitor.prototype.visitExpect_property_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#block_item_declaration.
sv2017ParserVisitor.prototype.visitBlock_item_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#param_assignment.
sv2017ParserVisitor.prototype.visitParam_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#type_assignment.
sv2017ParserVisitor.prototype.visitType_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_type_assignments.
sv2017ParserVisitor.prototype.visitList_of_type_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_param_assignments.
sv2017ParserVisitor.prototype.visitList_of_param_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#local_parameter_declaration.
sv2017ParserVisitor.prototype.visitLocal_parameter_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parameter_declaration.
sv2017ParserVisitor.prototype.visitParameter_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#type_declaration.
sv2017ParserVisitor.prototype.visitType_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_type_declaration.
sv2017ParserVisitor.prototype.visitNet_type_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#let_declaration.
sv2017ParserVisitor.prototype.visitLet_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#let_port_list.
sv2017ParserVisitor.prototype.visitLet_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#let_port_item.
sv2017ParserVisitor.prototype.visitLet_port_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#let_formal_type.
sv2017ParserVisitor.prototype.visitLet_formal_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_import_declaration.
sv2017ParserVisitor.prototype.visitPackage_import_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_import_item.
sv2017ParserVisitor.prototype.visitPackage_import_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_list_of_arguments.
sv2017ParserVisitor.prototype.visitProperty_list_of_arguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_actual_arg.
sv2017ParserVisitor.prototype.visitProperty_actual_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_formal_type.
sv2017ParserVisitor.prototype.visitProperty_formal_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_formal_type.
sv2017ParserVisitor.prototype.visitSequence_formal_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_instance.
sv2017ParserVisitor.prototype.visitProperty_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_spec.
sv2017ParserVisitor.prototype.visitProperty_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_expr.
sv2017ParserVisitor.prototype.visitProperty_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_case_item.
sv2017ParserVisitor.prototype.visitProperty_case_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bit_select.
sv2017ParserVisitor.prototype.visitBit_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#identifier_with_bit_select.
sv2017ParserVisitor.prototype.visitIdentifier_with_bit_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_or_class_scoped_hier_id_with_select.
sv2017ParserVisitor.prototype.visitPackage_or_class_scoped_hier_id_with_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_or_class_scoped_path_item.
sv2017ParserVisitor.prototype.visitPackage_or_class_scoped_path_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_or_class_scoped_path.
sv2017ParserVisitor.prototype.visitPackage_or_class_scoped_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#hierarchical_identifier.
sv2017ParserVisitor.prototype.visitHierarchical_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_or_class_scoped_id.
sv2017ParserVisitor.prototype.visitPackage_or_class_scoped_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#select.
sv2017ParserVisitor.prototype.visitSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#event_expression_item.
sv2017ParserVisitor.prototype.visitEvent_expression_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#event_expression.
sv2017ParserVisitor.prototype.visitEvent_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#boolean_abbrev.
sv2017ParserVisitor.prototype.visitBoolean_abbrev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_abbrev.
sv2017ParserVisitor.prototype.visitSequence_abbrev = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#consecutive_repetition.
sv2017ParserVisitor.prototype.visitConsecutive_repetition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#non_consecutive_repetition.
sv2017ParserVisitor.prototype.visitNon_consecutive_repetition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#goto_repetition.
sv2017ParserVisitor.prototype.visitGoto_repetition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cycle_delay_const_range_expression.
sv2017ParserVisitor.prototype.visitCycle_delay_const_range_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_instance.
sv2017ParserVisitor.prototype.visitSequence_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_expr.
sv2017ParserVisitor.prototype.visitSequence_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_match_item.
sv2017ParserVisitor.prototype.visitSequence_match_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#operator_assignment.
sv2017ParserVisitor.prototype.visitOperator_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_actual_arg.
sv2017ParserVisitor.prototype.visitSequence_actual_arg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dist_weight.
sv2017ParserVisitor.prototype.visitDist_weight = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_declaration.
sv2017ParserVisitor.prototype.visitClocking_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_item.
sv2017ParserVisitor.prototype.visitClocking_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_clocking_decl_assign.
sv2017ParserVisitor.prototype.visitList_of_clocking_decl_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_decl_assign.
sv2017ParserVisitor.prototype.visitClocking_decl_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#default_skew.
sv2017ParserVisitor.prototype.visitDefault_skew = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_direction.
sv2017ParserVisitor.prototype.visitClocking_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_skew.
sv2017ParserVisitor.prototype.visitClocking_skew = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#clocking_event.
sv2017ParserVisitor.prototype.visitClocking_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cycle_delay_range.
sv2017ParserVisitor.prototype.visitCycle_delay_range = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#expression_or_dist.
sv2017ParserVisitor.prototype.visitExpression_or_dist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#covergroup_declaration.
sv2017ParserVisitor.prototype.visitCovergroup_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cover_cross.
sv2017ParserVisitor.prototype.visitCover_cross = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#identifier_list_2plus.
sv2017ParserVisitor.prototype.visitIdentifier_list_2plus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cross_body.
sv2017ParserVisitor.prototype.visitCross_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cross_body_item.
sv2017ParserVisitor.prototype.visitCross_body_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_selection_or_option.
sv2017ParserVisitor.prototype.visitBins_selection_or_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_selection.
sv2017ParserVisitor.prototype.visitBins_selection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#select_expression.
sv2017ParserVisitor.prototype.visitSelect_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#select_condition.
sv2017ParserVisitor.prototype.visitSelect_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_expression.
sv2017ParserVisitor.prototype.visitBins_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#covergroup_range_list.
sv2017ParserVisitor.prototype.visitCovergroup_range_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#covergroup_value_range.
sv2017ParserVisitor.prototype.visitCovergroup_value_range = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#covergroup_expression.
sv2017ParserVisitor.prototype.visitCovergroup_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#coverage_spec_or_option.
sv2017ParserVisitor.prototype.visitCoverage_spec_or_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#coverage_option.
sv2017ParserVisitor.prototype.visitCoverage_option = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#coverage_spec.
sv2017ParserVisitor.prototype.visitCoverage_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cover_point.
sv2017ParserVisitor.prototype.visitCover_point = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_or_empty.
sv2017ParserVisitor.prototype.visitBins_or_empty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bins_or_options.
sv2017ParserVisitor.prototype.visitBins_or_options = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#trans_list.
sv2017ParserVisitor.prototype.visitTrans_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#trans_set.
sv2017ParserVisitor.prototype.visitTrans_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#trans_range_list.
sv2017ParserVisitor.prototype.visitTrans_range_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#repeat_range.
sv2017ParserVisitor.prototype.visitRepeat_range = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#coverage_event.
sv2017ParserVisitor.prototype.visitCoverage_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#block_event_expression.
sv2017ParserVisitor.prototype.visitBlock_event_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#hierarchical_btf_identifier.
sv2017ParserVisitor.prototype.visitHierarchical_btf_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assertion_variable_declaration.
sv2017ParserVisitor.prototype.visitAssertion_variable_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dist_item.
sv2017ParserVisitor.prototype.visitDist_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#value_range.
sv2017ParserVisitor.prototype.visitValue_range = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#attribute_instance.
sv2017ParserVisitor.prototype.visitAttribute_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#attr_spec.
sv2017ParserVisitor.prototype.visitAttr_spec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_new.
sv2017ParserVisitor.prototype.visitClass_new = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#param_expression.
sv2017ParserVisitor.prototype.visitParam_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constant_param_expression.
sv2017ParserVisitor.prototype.visitConstant_param_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#unpacked_dimension.
sv2017ParserVisitor.prototype.visitUnpacked_dimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#packed_dimension.
sv2017ParserVisitor.prototype.visitPacked_dimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#variable_dimension.
sv2017ParserVisitor.prototype.visitVariable_dimension = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#struct_union.
sv2017ParserVisitor.prototype.visitStruct_union = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#enum_base_type.
sv2017ParserVisitor.prototype.visitEnum_base_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_type_primitive.
sv2017ParserVisitor.prototype.visitData_type_primitive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_type.
sv2017ParserVisitor.prototype.visitData_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_type_or_implicit.
sv2017ParserVisitor.prototype.visitData_type_or_implicit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#implicit_data_type.
sv2017ParserVisitor.prototype.visitImplicit_data_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_list_of_arguments_named_item.
sv2017ParserVisitor.prototype.visitSequence_list_of_arguments_named_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_list_of_arguments.
sv2017ParserVisitor.prototype.visitSequence_list_of_arguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_arguments_named_item.
sv2017ParserVisitor.prototype.visitList_of_arguments_named_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_arguments.
sv2017ParserVisitor.prototype.visitList_of_arguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#primary_literal.
sv2017ParserVisitor.prototype.visitPrimary_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#type_reference.
sv2017ParserVisitor.prototype.visitType_reference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_scope.
sv2017ParserVisitor.prototype.visitPackage_scope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#ps_identifier.
sv2017ParserVisitor.prototype.visitPs_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_parameter_value_assignments.
sv2017ParserVisitor.prototype.visitList_of_parameter_value_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parameter_value_assignment.
sv2017ParserVisitor.prototype.visitParameter_value_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_type.
sv2017ParserVisitor.prototype.visitClass_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_scope.
sv2017ParserVisitor.prototype.visitClass_scope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#range_expression.
sv2017ParserVisitor.prototype.visitRange_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constant_range_expression.
sv2017ParserVisitor.prototype.visitConstant_range_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constant_mintypmax_expression.
sv2017ParserVisitor.prototype.visitConstant_mintypmax_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#mintypmax_expression.
sv2017ParserVisitor.prototype.visitMintypmax_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#named_parameter_assignment.
sv2017ParserVisitor.prototype.visitNamed_parameter_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryLit.
sv2017ParserVisitor.prototype.visitPrimaryLit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryRandomize.
sv2017ParserVisitor.prototype.visitPrimaryRandomize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryAssig.
sv2017ParserVisitor.prototype.visitPrimaryAssig = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryBitSelect.
sv2017ParserVisitor.prototype.visitPrimaryBitSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryTfCall.
sv2017ParserVisitor.prototype.visitPrimaryTfCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryTypeRef.
sv2017ParserVisitor.prototype.visitPrimaryTypeRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryCallArrayMethodNoArgs.
sv2017ParserVisitor.prototype.visitPrimaryCallArrayMethodNoArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryCast.
sv2017ParserVisitor.prototype.visitPrimaryCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryPar.
sv2017ParserVisitor.prototype.visitPrimaryPar = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryCall.
sv2017ParserVisitor.prototype.visitPrimaryCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryRandomize2.
sv2017ParserVisitor.prototype.visitPrimaryRandomize2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryDot.
sv2017ParserVisitor.prototype.visitPrimaryDot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryStreaming_concatenation.
sv2017ParserVisitor.prototype.visitPrimaryStreaming_concatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryPath.
sv2017ParserVisitor.prototype.visitPrimaryPath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryIndex.
sv2017ParserVisitor.prototype.visitPrimaryIndex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryCallWith.
sv2017ParserVisitor.prototype.visitPrimaryCallWith = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryConcat.
sv2017ParserVisitor.prototype.visitPrimaryConcat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#PrimaryCast2.
sv2017ParserVisitor.prototype.visitPrimaryCast2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constant_expression.
sv2017ParserVisitor.prototype.visitConstant_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#Inc_or_dec_expressionPre.
sv2017ParserVisitor.prototype.visitInc_or_dec_expressionPre = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#Inc_or_dec_expressionPost.
sv2017ParserVisitor.prototype.visitInc_or_dec_expressionPost = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#expression.
sv2017ParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#concatenation.
sv2017ParserVisitor.prototype.visitConcatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dynamic_array_new.
sv2017ParserVisitor.prototype.visitDynamic_array_new = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#const_or_range_expression.
sv2017ParserVisitor.prototype.visitConst_or_range_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#variable_decl_assignment.
sv2017ParserVisitor.prototype.visitVariable_decl_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_pattern_variable_lvalue.
sv2017ParserVisitor.prototype.visitAssignment_pattern_variable_lvalue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#stream_operator.
sv2017ParserVisitor.prototype.visitStream_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#slice_size.
sv2017ParserVisitor.prototype.visitSlice_size = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#streaming_concatenation.
sv2017ParserVisitor.prototype.visitStreaming_concatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#stream_concatenation.
sv2017ParserVisitor.prototype.visitStream_concatenation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#stream_expression.
sv2017ParserVisitor.prototype.visitStream_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#array_range_expression.
sv2017ParserVisitor.prototype.visitArray_range_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#open_range_list.
sv2017ParserVisitor.prototype.visitOpen_range_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pattern.
sv2017ParserVisitor.prototype.visitPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_pattern.
sv2017ParserVisitor.prototype.visitAssignment_pattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#structure_pattern_key.
sv2017ParserVisitor.prototype.visitStructure_pattern_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#array_pattern_key.
sv2017ParserVisitor.prototype.visitArray_pattern_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_pattern_key.
sv2017ParserVisitor.prototype.visitAssignment_pattern_key = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#struct_union_member.
sv2017ParserVisitor.prototype.visitStruct_union_member = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_type_or_void.
sv2017ParserVisitor.prototype.visitData_type_or_void = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#enum_name_declaration.
sv2017ParserVisitor.prototype.visitEnum_name_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_pattern_expression.
sv2017ParserVisitor.prototype.visitAssignment_pattern_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#assignment_pattern_expression_type.
sv2017ParserVisitor.prototype.visitAssignment_pattern_expression_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_lvalue.
sv2017ParserVisitor.prototype.visitNet_lvalue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#variable_lvalue.
sv2017ParserVisitor.prototype.visitVariable_lvalue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#solve_before_list.
sv2017ParserVisitor.prototype.visitSolve_before_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_block_item.
sv2017ParserVisitor.prototype.visitConstraint_block_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_expression.
sv2017ParserVisitor.prototype.visitConstraint_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#uniqueness_constraint.
sv2017ParserVisitor.prototype.visitUniqueness_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_set.
sv2017ParserVisitor.prototype.visitConstraint_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#randomize_call.
sv2017ParserVisitor.prototype.visitRandomize_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_header_common.
sv2017ParserVisitor.prototype.visitModule_header_common = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_declaration.
sv2017ParserVisitor.prototype.visitModule_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_keyword.
sv2017ParserVisitor.prototype.visitModule_keyword = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_port_type.
sv2017ParserVisitor.prototype.visitNet_port_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#var_data_type.
sv2017ParserVisitor.prototype.visitVar_data_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_or_var_data_type.
sv2017ParserVisitor.prototype.visitNet_or_var_data_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_defparam_assignments.
sv2017ParserVisitor.prototype.visitList_of_defparam_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_net_decl_assignments.
sv2017ParserVisitor.prototype.visitList_of_net_decl_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_specparam_assignments.
sv2017ParserVisitor.prototype.visitList_of_specparam_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_variable_decl_assignments.
sv2017ParserVisitor.prototype.visitList_of_variable_decl_assignments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_variable_identifiers_item.
sv2017ParserVisitor.prototype.visitList_of_variable_identifiers_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_variable_identifiers.
sv2017ParserVisitor.prototype.visitList_of_variable_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_variable_port_identifiers.
sv2017ParserVisitor.prototype.visitList_of_variable_port_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#defparam_assignment.
sv2017ParserVisitor.prototype.visitDefparam_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_decl_assignment.
sv2017ParserVisitor.prototype.visitNet_decl_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specparam_assignment.
sv2017ParserVisitor.prototype.visitSpecparam_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#error_limit_value.
sv2017ParserVisitor.prototype.visitError_limit_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#reject_limit_value.
sv2017ParserVisitor.prototype.visitReject_limit_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pulse_control_specparam.
sv2017ParserVisitor.prototype.visitPulse_control_specparam = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#identifier_doted_index_at_end.
sv2017ParserVisitor.prototype.visitIdentifier_doted_index_at_end = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specify_terminal_descriptor.
sv2017ParserVisitor.prototype.visitSpecify_terminal_descriptor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specify_input_terminal_descriptor.
sv2017ParserVisitor.prototype.visitSpecify_input_terminal_descriptor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specify_output_terminal_descriptor.
sv2017ParserVisitor.prototype.visitSpecify_output_terminal_descriptor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specify_item.
sv2017ParserVisitor.prototype.visitSpecify_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pulsestyle_declaration.
sv2017ParserVisitor.prototype.visitPulsestyle_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#showcancelled_declaration.
sv2017ParserVisitor.prototype.visitShowcancelled_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#path_declaration.
sv2017ParserVisitor.prototype.visitPath_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#simple_path_declaration.
sv2017ParserVisitor.prototype.visitSimple_path_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#path_delay_value.
sv2017ParserVisitor.prototype.visitPath_delay_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_path_outputs.
sv2017ParserVisitor.prototype.visitList_of_path_outputs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_path_inputs.
sv2017ParserVisitor.prototype.visitList_of_path_inputs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_paths.
sv2017ParserVisitor.prototype.visitList_of_paths = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_path_delay_expressions.
sv2017ParserVisitor.prototype.visitList_of_path_delay_expressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t_path_delay_expression.
sv2017ParserVisitor.prototype.visitT_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#trise_path_delay_expression.
sv2017ParserVisitor.prototype.visitTrise_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tfall_path_delay_expression.
sv2017ParserVisitor.prototype.visitTfall_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tz_path_delay_expression.
sv2017ParserVisitor.prototype.visitTz_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t01_path_delay_expression.
sv2017ParserVisitor.prototype.visitT01_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t10_path_delay_expression.
sv2017ParserVisitor.prototype.visitT10_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t0z_path_delay_expression.
sv2017ParserVisitor.prototype.visitT0z_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tz1_path_delay_expression.
sv2017ParserVisitor.prototype.visitTz1_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t1z_path_delay_expression.
sv2017ParserVisitor.prototype.visitT1z_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tz0_path_delay_expression.
sv2017ParserVisitor.prototype.visitTz0_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t0x_path_delay_expression.
sv2017ParserVisitor.prototype.visitT0x_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tx1_path_delay_expression.
sv2017ParserVisitor.prototype.visitTx1_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#t1x_path_delay_expression.
sv2017ParserVisitor.prototype.visitT1x_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tx0_path_delay_expression.
sv2017ParserVisitor.prototype.visitTx0_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#txz_path_delay_expression.
sv2017ParserVisitor.prototype.visitTxz_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#tzx_path_delay_expression.
sv2017ParserVisitor.prototype.visitTzx_path_delay_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parallel_path_description.
sv2017ParserVisitor.prototype.visitParallel_path_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#full_path_description.
sv2017ParserVisitor.prototype.visitFull_path_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#identifier_list.
sv2017ParserVisitor.prototype.visitIdentifier_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specparam_declaration.
sv2017ParserVisitor.prototype.visitSpecparam_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#edge_sensitive_path_declaration.
sv2017ParserVisitor.prototype.visitEdge_sensitive_path_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parallel_edge_sensitive_path_description.
sv2017ParserVisitor.prototype.visitParallel_edge_sensitive_path_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#full_edge_sensitive_path_description.
sv2017ParserVisitor.prototype.visitFull_edge_sensitive_path_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_source_expression.
sv2017ParserVisitor.prototype.visitData_source_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#data_declaration.
sv2017ParserVisitor.prototype.visitData_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_path_expression.
sv2017ParserVisitor.prototype.visitModule_path_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#state_dependent_path_declaration.
sv2017ParserVisitor.prototype.visitState_dependent_path_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_export_declaration.
sv2017ParserVisitor.prototype.visitPackage_export_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#genvar_declaration.
sv2017ParserVisitor.prototype.visitGenvar_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_declaration.
sv2017ParserVisitor.prototype.visitNet_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parameter_port_list.
sv2017ParserVisitor.prototype.visitParameter_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parameter_port_declaration.
sv2017ParserVisitor.prototype.visitParameter_port_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_port_declarations_ansi_item.
sv2017ParserVisitor.prototype.visitList_of_port_declarations_ansi_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_port_declarations.
sv2017ParserVisitor.prototype.visitList_of_port_declarations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#nonansi_port_declaration.
sv2017ParserVisitor.prototype.visitNonansi_port_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#nonansi_port.
sv2017ParserVisitor.prototype.visitNonansi_port = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#nonansi_port__expr.
sv2017ParserVisitor.prototype.visitNonansi_port__expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#port_identifier.
sv2017ParserVisitor.prototype.visitPort_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#ansi_port_declaration.
sv2017ParserVisitor.prototype.visitAnsi_port_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#system_timing_check.
sv2017ParserVisitor.prototype.visitSystem_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_setup_timing_check.
sv2017ParserVisitor.prototype.visitDolar_setup_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_hold_timing_check.
sv2017ParserVisitor.prototype.visitDolar_hold_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_setuphold_timing_check.
sv2017ParserVisitor.prototype.visitDolar_setuphold_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_recovery_timing_check.
sv2017ParserVisitor.prototype.visitDolar_recovery_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_removal_timing_check.
sv2017ParserVisitor.prototype.visitDolar_removal_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_recrem_timing_check.
sv2017ParserVisitor.prototype.visitDolar_recrem_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_skew_timing_check.
sv2017ParserVisitor.prototype.visitDolar_skew_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_timeskew_timing_check.
sv2017ParserVisitor.prototype.visitDolar_timeskew_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_fullskew_timing_check.
sv2017ParserVisitor.prototype.visitDolar_fullskew_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_period_timing_check.
sv2017ParserVisitor.prototype.visitDolar_period_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_width_timing_check.
sv2017ParserVisitor.prototype.visitDolar_width_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dolar_nochange_timing_check.
sv2017ParserVisitor.prototype.visitDolar_nochange_timing_check = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timecheck_condition.
sv2017ParserVisitor.prototype.visitTimecheck_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#controlled_reference_event.
sv2017ParserVisitor.prototype.visitControlled_reference_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#delayed_reference.
sv2017ParserVisitor.prototype.visitDelayed_reference = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#end_edge_offset.
sv2017ParserVisitor.prototype.visitEnd_edge_offset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#event_based_flag.
sv2017ParserVisitor.prototype.visitEvent_based_flag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#notifier.
sv2017ParserVisitor.prototype.visitNotifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#remain_active_flag.
sv2017ParserVisitor.prototype.visitRemain_active_flag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timestamp_condition.
sv2017ParserVisitor.prototype.visitTimestamp_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#start_edge_offset.
sv2017ParserVisitor.prototype.visitStart_edge_offset = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#threshold.
sv2017ParserVisitor.prototype.visitThreshold = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timing_check_limit.
sv2017ParserVisitor.prototype.visitTiming_check_limit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timing_check_event.
sv2017ParserVisitor.prototype.visitTiming_check_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#timing_check_condition.
sv2017ParserVisitor.prototype.visitTiming_check_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#scalar_timing_check_condition.
sv2017ParserVisitor.prototype.visitScalar_timing_check_condition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#controlled_timing_check_event.
sv2017ParserVisitor.prototype.visitControlled_timing_check_event = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#function_data_type_or_implicit.
sv2017ParserVisitor.prototype.visitFunction_data_type_or_implicit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#extern_tf_declaration.
sv2017ParserVisitor.prototype.visitExtern_tf_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#function_declaration.
sv2017ParserVisitor.prototype.visitFunction_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#task_prototype.
sv2017ParserVisitor.prototype.visitTask_prototype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#function_prototype.
sv2017ParserVisitor.prototype.visitFunction_prototype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dpi_import_export.
sv2017ParserVisitor.prototype.visitDpi_import_export = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dpi_function_import_property.
sv2017ParserVisitor.prototype.visitDpi_function_import_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#dpi_task_import_property.
sv2017ParserVisitor.prototype.visitDpi_task_import_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#task_and_function_declaration_common.
sv2017ParserVisitor.prototype.visitTask_and_function_declaration_common = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#task_declaration.
sv2017ParserVisitor.prototype.visitTask_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#method_prototype.
sv2017ParserVisitor.prototype.visitMethod_prototype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#extern_constraint_declaration.
sv2017ParserVisitor.prototype.visitExtern_constraint_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_block.
sv2017ParserVisitor.prototype.visitConstraint_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_port_list.
sv2017ParserVisitor.prototype.visitChecker_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_port_item.
sv2017ParserVisitor.prototype.visitChecker_port_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_port_direction.
sv2017ParserVisitor.prototype.visitChecker_port_direction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_declaration.
sv2017ParserVisitor.prototype.visitChecker_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_declaration.
sv2017ParserVisitor.prototype.visitClass_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#always_construct.
sv2017ParserVisitor.prototype.visitAlways_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_class_type.
sv2017ParserVisitor.prototype.visitInterface_class_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_class_declaration.
sv2017ParserVisitor.prototype.visitInterface_class_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_class_item.
sv2017ParserVisitor.prototype.visitInterface_class_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#interface_class_method.
sv2017ParserVisitor.prototype.visitInterface_class_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_declaration.
sv2017ParserVisitor.prototype.visitPackage_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#package_item.
sv2017ParserVisitor.prototype.visitPackage_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#program_declaration.
sv2017ParserVisitor.prototype.visitProgram_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#program_header.
sv2017ParserVisitor.prototype.visitProgram_header = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#program_item.
sv2017ParserVisitor.prototype.visitProgram_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#non_port_program_item.
sv2017ParserVisitor.prototype.visitNon_port_program_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#anonymous_program.
sv2017ParserVisitor.prototype.visitAnonymous_program = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#anonymous_program_item.
sv2017ParserVisitor.prototype.visitAnonymous_program_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_declaration.
sv2017ParserVisitor.prototype.visitSequence_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_port_list.
sv2017ParserVisitor.prototype.visitSequence_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#sequence_port_item.
sv2017ParserVisitor.prototype.visitSequence_port_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_declaration.
sv2017ParserVisitor.prototype.visitProperty_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_port_list.
sv2017ParserVisitor.prototype.visitProperty_port_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#property_port_item.
sv2017ParserVisitor.prototype.visitProperty_port_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#continuous_assign.
sv2017ParserVisitor.prototype.visitContinuous_assign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#checker_or_generate_item.
sv2017ParserVisitor.prototype.visitChecker_or_generate_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_prototype.
sv2017ParserVisitor.prototype.visitConstraint_prototype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_constraint.
sv2017ParserVisitor.prototype.visitClass_constraint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#constraint_declaration.
sv2017ParserVisitor.prototype.visitConstraint_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_constructor_declaration.
sv2017ParserVisitor.prototype.visitClass_constructor_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_property.
sv2017ParserVisitor.prototype.visitClass_property = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_method.
sv2017ParserVisitor.prototype.visitClass_method = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_constructor_prototype.
sv2017ParserVisitor.prototype.visitClass_constructor_prototype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#class_item.
sv2017ParserVisitor.prototype.visitClass_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#parameter_override.
sv2017ParserVisitor.prototype.visitParameter_override = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#gate_instantiation.
sv2017ParserVisitor.prototype.visitGate_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#enable_gate_or_mos_switch_or_cmos_switch_instance.
sv2017ParserVisitor.prototype.visitEnable_gate_or_mos_switch_or_cmos_switch_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#n_input_gate_instance.
sv2017ParserVisitor.prototype.visitN_input_gate_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#n_output_gate_instance.
sv2017ParserVisitor.prototype.visitN_output_gate_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pass_switch_instance.
sv2017ParserVisitor.prototype.visitPass_switch_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pass_enable_switch_instance.
sv2017ParserVisitor.prototype.visitPass_enable_switch_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pull_gate_instance.
sv2017ParserVisitor.prototype.visitPull_gate_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pulldown_strength.
sv2017ParserVisitor.prototype.visitPulldown_strength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#pullup_strength.
sv2017ParserVisitor.prototype.visitPullup_strength = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#enable_terminal.
sv2017ParserVisitor.prototype.visitEnable_terminal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#inout_terminal.
sv2017ParserVisitor.prototype.visitInout_terminal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#input_terminal.
sv2017ParserVisitor.prototype.visitInput_terminal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#output_terminal.
sv2017ParserVisitor.prototype.visitOutput_terminal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_instantiation.
sv2017ParserVisitor.prototype.visitUdp_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_instance.
sv2017ParserVisitor.prototype.visitUdp_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#udp_instance_body.
sv2017ParserVisitor.prototype.visitUdp_instance_body = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_or_interface_or_program_or_udp_instantiation.
sv2017ParserVisitor.prototype.visitModule_or_interface_or_program_or_udp_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#hierarchical_instance.
sv2017ParserVisitor.prototype.visitHierarchical_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#list_of_port_connections.
sv2017ParserVisitor.prototype.visitList_of_port_connections = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#ordered_port_connection.
sv2017ParserVisitor.prototype.visitOrdered_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#named_port_connection.
sv2017ParserVisitor.prototype.visitNamed_port_connection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bind_directive.
sv2017ParserVisitor.prototype.visitBind_directive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bind_target_instance.
sv2017ParserVisitor.prototype.visitBind_target_instance = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bind_target_instance_list.
sv2017ParserVisitor.prototype.visitBind_target_instance_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#bind_instantiation.
sv2017ParserVisitor.prototype.visitBind_instantiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#config_declaration.
sv2017ParserVisitor.prototype.visitConfig_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#design_statement.
sv2017ParserVisitor.prototype.visitDesign_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#config_rule_statement.
sv2017ParserVisitor.prototype.visitConfig_rule_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#inst_clause.
sv2017ParserVisitor.prototype.visitInst_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#inst_name.
sv2017ParserVisitor.prototype.visitInst_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#cell_clause.
sv2017ParserVisitor.prototype.visitCell_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#liblist_clause.
sv2017ParserVisitor.prototype.visitLiblist_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#use_clause.
sv2017ParserVisitor.prototype.visitUse_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#net_alias.
sv2017ParserVisitor.prototype.visitNet_alias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#specify_block.
sv2017ParserVisitor.prototype.visitSpecify_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#generate_region.
sv2017ParserVisitor.prototype.visitGenerate_region = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#genvar_expression.
sv2017ParserVisitor.prototype.visitGenvar_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#loop_generate_construct.
sv2017ParserVisitor.prototype.visitLoop_generate_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#genvar_initialization.
sv2017ParserVisitor.prototype.visitGenvar_initialization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#genvar_iteration.
sv2017ParserVisitor.prototype.visitGenvar_iteration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#conditional_generate_construct.
sv2017ParserVisitor.prototype.visitConditional_generate_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#if_generate_construct.
sv2017ParserVisitor.prototype.visitIf_generate_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_generate_construct.
sv2017ParserVisitor.prototype.visitCase_generate_construct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#case_generate_item.
sv2017ParserVisitor.prototype.visitCase_generate_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#generate_begin_end_block.
sv2017ParserVisitor.prototype.visitGenerate_begin_end_block = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#generate_item.
sv2017ParserVisitor.prototype.visitGenerate_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#program_generate_item.
sv2017ParserVisitor.prototype.visitProgram_generate_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_or_generate_item.
sv2017ParserVisitor.prototype.visitModule_or_generate_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#elaboration_system_task.
sv2017ParserVisitor.prototype.visitElaboration_system_task = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_item_item.
sv2017ParserVisitor.prototype.visitModule_item_item = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by sv2017Parser#module_item.
sv2017ParserVisitor.prototype.visitModule_item = function(ctx) {
  return this.visitChildren(ctx);
};



exports.sv2017ParserVisitor = sv2017ParserVisitor;